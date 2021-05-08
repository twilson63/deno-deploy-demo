import { serve } from './deps.js'
import getIndex from './api/mod.js'

serve({
  '/': getIndex
});
