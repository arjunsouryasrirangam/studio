import {ai} from '@/ai/genkit';
import {createNextApiHandler} from '@genkit-ai/next';

export const {GET, POST} = createNextApiHandler({ai});
