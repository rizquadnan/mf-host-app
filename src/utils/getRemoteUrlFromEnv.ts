// Gets the remote url by scope
export const getRemoteUrlFromEnv = (scope: string): string => {
  if (!process.env.remotes) {
    throw new Error('[getRemoteUrlFromEnv] remotes env not found')
  }

  // @ts-ignore
  if (!process.env.remotes[scope]) {
    throw new Error(
      `Could not find scope: ${scope} in the remotes env`
    );
  }

  // @ts-ignore
  return process.env.remotes[scope] as string
}