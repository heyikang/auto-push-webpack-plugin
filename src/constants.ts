import path from 'path';
import { cwd } from 'process';

export const UPLOAD_FULL_PATH = path.resolve(cwd(), '.auto_push_dir');