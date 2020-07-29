import getStyle from 'utils/getStyle';
import styles from '../../components/Button/styles.module.css';

describe('getStyle test', () => {
  it('getStyle Props', () => {
    const looks = [
      'testStyle',
    ];
    const customStyles = getStyle({
      looks, styles,
    });
    expect(customStyles).toBe('testStyle');
  });
});
