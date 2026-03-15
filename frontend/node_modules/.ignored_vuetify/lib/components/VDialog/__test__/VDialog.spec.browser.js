import { createTextVNode as _createTextVNode, createElementVNode as _createElementVNode, createVNode as _createVNode } from "vue";
// Components
import { VDialog } from "../VDialog.js"; // Utilities
import { render, screen, userEvent } from '@test';
import { nextTick, ref } from 'vue';

// Tests
describe('VDialog', () => {
  it('should render correctly', async () => {
    const model = ref(false);
    const {
      element
    } = render(() => _createElementVNode("div", null, [_createVNode(VDialog, {
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
    await userEvent.click(element);
    await expect.poll(() => model.value).toBeFalsy();
    await expect.poll(() => screen.queryByTestId('dialog')).toBeNull();
    await expect.poll(() => screen.queryByTestId('content')).toBeNull();
  });
  it('should emit afterLeave', async () => {
    const model = ref(true);
    const onAfterLeave = vi.fn();
    const {
      element
    } = render(() => _createElementVNode("div", null, [_createVNode(VDialog, {
      "modelValue": model.value,
      "onUpdate:modelValue": $event => model.value = $event,
      "onAfterLeave": onAfterLeave
    }, {
      default: () => [_createElementVNode("div", {
        "data-test": "content"
      }, [_createTextVNode("Content")])]
    })]));
    await userEvent.click(element);
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
});
//# sourceMappingURL=VDialog.spec.browser.js.map