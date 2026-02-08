// Types

export function useFileDrop() {
  function hasFilesOrFolders(e) {
    const entries = [...(e.dataTransfer?.items ?? [])].filter(x => x.kind === 'file').map(x => x.webkitGetAsEntry()).filter(Boolean);
    return entries.length > 0 || [...(e.dataTransfer?.files ?? [])].length > 0;
  }
  async function handleDrop(e) {
    const result = [];
    const entries = [...(e.dataTransfer?.items ?? [])].filter(x => x.kind === 'file').map(x => x.webkitGetAsEntry()).filter(Boolean);
    if (entries.length) {
      for (const entry of entries) {
        const files = await traverseFileTree(entry, appendIfDirectory('.', entry));
        result.push(...files.map(x => x.file));
      }
    } else {
      result.push(...[...(e.dataTransfer?.files ?? [])]);
    }
    return result;
  }
  return {
    handleDrop,
    hasFilesOrFolders
  };
}
function traverseFileTree(item) {
  let path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return new Promise((resolve, reject) => {
    if (item.isFile) {
      const fileEntry = item;
      fileEntry.file(file => resolve([{
        file,
        path
      }]), reject);
    } else if (item.isDirectory) {
      const directoryReader = item.createReader();
      directoryReader.readEntries(async entries => {
        const files = [];
        for (const entry of entries) {
          files.push(...(await traverseFileTree(entry, appendIfDirectory(path, entry))));
        }
        resolve(files);
      });
    }
  });
}
function appendIfDirectory(path, item) {
  return item.isDirectory ? `${path}/${item.name}` : path;
}
//# sourceMappingURL=fileDrop.js.map