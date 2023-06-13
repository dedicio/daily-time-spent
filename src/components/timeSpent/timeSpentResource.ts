import apiService from '../../api/apiService';
import { TimeSpent, DailyTimeSpentList } from './timeSpent.type';

export default class TimeSpentResource {
  private api

  constructor() {
    this.api = apiService
  }

  public getTodayTimeSpent = (): Promise<DailyTimeSpentList> => {
    return this.api.get('/today')
  }

  public getTimeSpentOpenToday = (): Promise<TimeSpent> => {
    return this.api.get('/open-today')
  }

  public createTimeSpent = (): Promise<TimeSpent> => {
    return this.api.post('/start', {})
  }

  public updateTimeSpent = (timeSpentId: string): Promise<TimeSpent> => {
    return this.api.patch(`/${timeSpentId}/stop`, {})
  }
}