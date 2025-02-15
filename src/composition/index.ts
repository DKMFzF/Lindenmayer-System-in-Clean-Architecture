import '../presentation/scss/styles.scss'
import { container } from '@/composition/di-container';
import { Application } from './launching-app/types';

const app = container.get<Application>('Application');
app.start();
