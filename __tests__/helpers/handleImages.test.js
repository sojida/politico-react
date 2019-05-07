import handleImages from '../../src/helpers/handleImages';
import avatar from '../../src/assets/images/avatar.png';

describe('Images', () => {
  it('shows avatar images', () => {
    expect(handleImages('logo123')).toEqual(avatar);
  });

  it('shows avatar images', () => {
    expect(handleImages('null')).toEqual(avatar);
  });

  it('shows avatar images', () => {
    expect(handleImages('logourl')).toEqual(avatar);
  });

  it('shows avatar images', () => {
    expect(handleImages('userpic')).toEqual(
      ' https://shielded-headland-63958.herokuapp.com/api/v1/images/userpic'
    );
  });
});
