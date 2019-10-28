import Action from '../../lib/Action';

export class SearchActions {
  public searchForBlockById: Action<{ id: string }> = new Action();
  public searchForTransactionById: Action<{ id: string }> = new Action();
}
