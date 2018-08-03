import utils from '../../../src/helpers/utils';

describe('getNextItemId', () => {
  it('should get the next item when it is not the last item', () => {
    expect(utils.getNextItemId('3', 5)).toEqual('4');
  });
});
