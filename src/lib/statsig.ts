import statsig from 'statsig-js';

export const initializeStatsig = async () => {
  await statsig.initialize(process.env.NEXT_PUBLIC_STATSIG_CLIENT_KEY!);
};