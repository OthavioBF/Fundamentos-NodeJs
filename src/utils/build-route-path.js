export function buildRoutePath(path) {
  const routeParameters = /:([a-zA-Z]+)/g;
  const pathWithParameters = path.replaceAll(
    routeParameters,
    '(?<$1>[a-z0-9-_]+)'
  );

  const pathRegex = new RegExp(`^${pathWithParameters}(?<query>\\?(.*))?$`);

  return pathRegex;
}
