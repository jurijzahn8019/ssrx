import { createAsync } from '@solidjs/router';
import { Suspense } from 'solid-js';

import { Counter } from '~/components/Counter.tsx';

import { getHomeData } from './loader.ts';
import styles from './styles.module.css';

export default function Component() {
  const data = createAsync(() => getHomeData());

  return (
    <div>
      <h2>Home</h2>

      <p>This home route simply loads some data (with a simulated delay) and displays it.</p>

      <Suspense fallback="Loading...">
        <p>
          Loader Data: <span class={styles['data']}>{data()?.data}</span>
        </p>
      </Suspense>

      <div>
        <Counter />
      </div>
    </div>
  );
}
