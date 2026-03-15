import { createTextVNode as _createTextVNode, createElementVNode as _createElementVNode, createVNode as _createVNode } from "vue";
// Components
import { VDialog } from "../VDialog.js"; // Utilities
import { commands, render, screen, userEvent, wait } from '@test';
import { h, nextTick, ref } from 'vue';
import { createMemoryHistory, createRouter } from 'vue-router';

// Tests
describe('VDialog', () => {
  it('should render correctly', async () => {
    const model = ref(false);
    render(() => _createElementVNode("div", null, [_createVNode(VDialog, {
      "modelValue": model.value,
      "onUpdate:modelValue": $event => model.value = $event,
      "data-testid": "dialog"
    }, {
      default: () => [_createElementVNode("div", {
        "data-testid": "content"
      }, [_createTextVNode("Content")])]
    })]));
    expect(screen.queryByTestId('dialog')).toBeNull();
    model.value = true;
    await nextTick();
    await expect(screen.findByTestId('dialog')).resolves.toBeVisible();
    await expect.element(await screen.findByTestId('content')).toBeVisible();
    await commands.click(0, 0);
    await expect.poll(() => model.value).toBeFalsy();
    await expect.poll(() => screen.queryByTestId('dialog')).toBeNull();
    await expect.poll(() => screen.queryByTestId('content')).toBeNull();
  });
  it('should emit afterLeave', async () => {
    const model = ref(true);
    const onAfterLeave = vi.fn();
    render(() => _createElementVNode("div", null, [_createVNode(VDialog, {
      "modelValue": model.value,
      "onUpdate:modelValue": $event => model.value = $event,
      "onAfterLeave": onAfterLeave
    }, {
      default: () => [_createElementVNode("div", {
        "data-test": "content"
      }, [_createTextVNode("Content")])]
    })]));
    await commands.click(0, 0);
    await expect.poll(() => onAfterLeave).toHaveBeenCalledTimes(1);
  });
  it('should focus on the last element when shift + tab key is pressed on the first element', async () => {
    const model = ref(true);
    render(() => _createElementVNode("div", null, [_createVNode(VDialog, {
      "modelValue": model.value,
      "onUpdate:modelValue": $event => model.value = $event,
      "persistent": true
    }, {
      default: () => [_createElementVNode("div", null, [_createElementVNode("button", {
        "data-testid": "first"
      }, [_createTextVNode("First")]), _createElementVNode("button", {
        "data-testid": "last"
      }, [_createTextVNode("Last")])])]
    })]));
    const first = screen.getByCSS('button[data-testid="first"]');
    const last = screen.getByCSS('button[data-testid="last"]');
    first.focus();
    await expect.poll(() => document.activeElement).toBe(first);
    await userEvent.tab({
      shift: true
    });
    await expect.poll(() => document.activeElement).toBe(last);
  });
  it('should focus on the first element when Tab key is pressed on the last element', async () => {
    const model = ref(true);
    render(() => _createElementVNode("div", null, [_createVNode(VDialog, {
      "modelValue": model.value,
      "onUpdate:modelValue": $event => model.value = $event
    }, {
      default: () => [_createElementVNode("div", null, [_createElementVNode("button", {
        "data-testid": "first"
      }, [_createTextVNode("First")]), _createElementVNode("button", {
        "data-testid": "last"
      }, [_createTextVNode("Last")])])]
    })]));
    const first = screen.getByCSS('button[data-testid="first"]');
    const last = screen.getByCSS('button[data-testid="last"]');
    last.focus();
    await expect.poll(() => document.activeElement).toBe(last);
    await userEvent.tab();
    await expect.poll(() => document.activeElement).toBe(first);
  });
  describe('routing back', () => {
    function createTestRouter() {
      return createRouter({
        history: createMemoryHistory(),
        routes: [{
          path: '/',
          component: {
            setup: () => () => h('h1', 'home')
          }
        }, {
          path: '/page1',
          component: {
            setup: () => () => h('h1', 'page1')
          }
        }, {
          path: '/page2',
          component: {
            setup: () => () => h('h1', 'page2')
          }
        }, {
          path: '/page3',
          component: {
            setup: () => () => h('h1', 'page3')
          }
        }]
      });
    }
    async function simulateBackNavigation(router) {
      router.back();
      for (let i = 0; i < 10; i++) await nextTick(); // flush microtasks
      window.dispatchEvent(new PopStateEvent('popstate', {
        state: {}
      }));
      await wait();
    }
    it('should block back with persistent dialog, allow after close, and block again when reopened', async () => {
      const router = createTestRouter();
      await router.push('/page1');
      await router.push('/page2');
      await router.push('/page3');
      const model = ref(true);
      render(() => _createVNode(VDialog, {
        "modelValue": model.value,
        "onUpdate:modelValue": $event => model.value = $event,
        "persistent": true,
        "data-testid": "dialog"
      }, {
        default: () => [_createElementVNode("div", {
          "data-testid": "content"
        }, [_createTextVNode("Content")])]
      }), {
        global: {
          plugins: [router]
        }
      });
      await expect(screen.findByTestId('dialog')).resolves.toBeVisible();
      await wait();

      // 1st back: persistent dialog blocks navigation
      await simulateBackNavigation(router);
      expect(model.value).toBeTruthy();
      expect(router.currentRoute.value.path).toBe('/page3');

      // close the dialog
      model.value = false;
      await nextTick();

      // 2nd back: no dialog blocking, navigation proceeds
      await simulateBackNavigation(router);
      expect(router.currentRoute.value.path).toBe('/page2');

      // reopen
      model.value = true;
      await nextTick();
      await expect(screen.findByTestId('dialog')).resolves.toBeVisible();
      await wait();

      // 3rd back: persistent dialog blocks again
      await simulateBackNavigation(router);
      expect(model.value).toBeTruthy();
      expect(router.currentRoute.value.path).toBe('/page2');
    });
    it('should close non-persistent dialog on back and block navigation', async () => {
      const router = createTestRouter();
      await router.push('/page1');
      await router.push('/page2');
      await router.push('/page3');
      const model = ref(false);
      render(() => _createVNode(VDialog, {
        "modelValue": model.value,
        "onUpdate:modelValue": $event => model.value = $event,
        "data-testid": "dialog"
      }, {
        default: () => [_createElementVNode("div", {
          "data-testid": "content"
        }, [_createTextVNode("Content")])]
      }), {
        global: {
          plugins: [router]
        }
      });

      // Open dialog
      model.value = true;
      await nextTick();
      await expect(screen.findByTestId('dialog')).resolves.toBeVisible();
      await wait();

      // 1st back: dialog closes but route stays (navigation blocked)
      await simulateBackNavigation(router);
      await expect.poll(() => model.value).toBeFalsy();
      expect(router.currentRoute.value.path).toBe('/page3');

      // 2nd back: no dialog, navigation proceeds
      await simulateBackNavigation(router);
      expect(router.currentRoute.value.path).toBe('/page2');

      // reopen
      model.value = true;
      await nextTick();
      await expect(screen.findByTestId('dialog')).resolves.toBeVisible();
      await wait();

      // 3rd back: dialog closes again, route stays
      await simulateBackNavigation(router);
      await expect.poll(() => model.value).toBeFalsy();
      expect(router.currentRoute.value.path).toBe('/page2');
    });
  });
});
//# sourceMappingURL=VDialog.spec.browser.js.map