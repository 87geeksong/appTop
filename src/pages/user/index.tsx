import { history } from 'umi';
import styles from './style.less';

export default function User() {
  const handleGo = () => {
    history.push('/me');
  };
  return (
    <div>
      <h1 className={styles.title}>User index</h1>
      <a onClick={() => handleGo()}>go to me</a>
    </div>
  );
}
