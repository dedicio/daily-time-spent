import apiService from '../../api/apiService';
import { TimeSpent } from './timeSpent.type';

export default class TimeSpentResource {
  private api

  constructor() {
    this.api = apiService
  }

  public getTimeSpents = (): Promise<TimeSpent[]> => {
    return this.api.get('/')
  }

  public getTimeSpentById = (id: string): Promise<TimeSpent> => {
    return this.api.get(`/${id}`)
  }

  public getTodayOpenTimeSpent = (): Promise<TimeSpent> => {
    return this.api.get('/open-today')
  }

  public startTimeSpent = (): Promise<TimeSpent> => {
    return this.api.post('/start', {})
  }

  public stopTimeSpent = (id: string): Promise<TimeSpent> => {
    return this.api.patch(`/${id}/stop`, {})
  }
}