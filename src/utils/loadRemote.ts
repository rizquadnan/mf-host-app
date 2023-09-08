// Helper function to handle module federation remote loading
const loadScope = (url: string, scope: string) => {
  const element = document.createElement("script");
  const promise = new Promise((resolve, reject) => {
    element.src = url;
    element.type = "text/javascript";
    element.async = true;
    // @ts-ignore
    element.onload = () => resolve(window[scope]);
    element.onerror = reject;
  });
  document.head.appendChild(element);
  promise.finally(() => document.head.removeChild(element));
  return promise;
};

export const loadModule = async (
  url: string,
  scope: string,
  module: string
) => {
  try {
    const container = await loadScope(url, scope);
    // @ts-ignore
    await __webpack_init_sharing__("default");
    // @ts-ignore
    await container.init(__webpack_share_scopes__.default);
    // @ts-ignore
    const factory = await container.get(module);
    return factory();
  } catch (error) {
    console.error("Error loading module:", error);
    throw error;
  }
};
