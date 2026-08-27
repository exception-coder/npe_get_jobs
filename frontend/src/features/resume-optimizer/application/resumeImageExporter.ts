import html2canvas from 'html2canvas';

function createDownload(blob: Blob, fileName: string): void {
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  link.click();
  URL.revokeObjectURL(link.href);
}

async function render(element: HTMLElement): Promise<HTMLCanvasElement> {
  return html2canvas(element, {
    backgroundColor: '#fffefa',
    scale: Math.min(window.devicePixelRatio || 1, 2),
    useCORS: true,
    logging: false,
  });
}

export async function downloadResumeImage(element: HTMLElement, name: string): Promise<void> {
  const canvas = await render(element);
  const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/png', 1));
  if (!blob) throw new Error('图片生成失败');
  createDownload(blob, `${name || '个人'}-简历.png`);
}

export async function copyResumeImage(element: HTMLElement): Promise<void> {
  if (!navigator.clipboard || typeof ClipboardItem === 'undefined') throw new Error('当前浏览器不支持复制图片');
  const canvas = await render(element);
  const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/png', 1));
  if (!blob) throw new Error('图片生成失败');
  await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
}
