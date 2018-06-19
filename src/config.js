'use strict'

const globalConfig = {
  isolatedGlobalState: true,
  enforceActions: 'strict',
}

const developmentConfig = {
  ...globalConfig,
  // reactionScheduler: (f) => { setTimeout(f, 100) },
}

export const config = {
  development: developmentConfig,
  production: globalConfig
}
