export type TimeSpent = {
  _id: string,
  startedAt?: string,
  finishedAt?: string,
}

export type DailyTimeSpentList = {
  items: TimeSpent[],
  duration: number,
}
