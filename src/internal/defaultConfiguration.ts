import * as Types from './types';

const DEFAULT_CONFIGURATION: Types.NetInfoConfiguration = {
  reachabilityUrl: 'https://app-prepub.bookln.cn/',
  reachabilityTest: (response: Response): Promise<boolean> =>
    Promise.resolve(response.status === 200),
  reachabilityShortTimeout: 5 * 1000, // 5s
  reachabilityLongTimeout: 60 * 1000, // 60s
  reachabilityRequestTimeout: 15 * 1000, // 15s
  reachabilityShouldRun: (): boolean => true,
  shouldFetchWiFiSSID: false
};

export default DEFAULT_CONFIGURATION;