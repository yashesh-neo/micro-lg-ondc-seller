import { SearchContext } from './search-context.dto';
import { SearchDescriptor } from './search-descriptor.dto';

export class SearchRequest {
  context: SearchContext;
  message: {
    intent: {
      descriptor: SearchDescriptor;
    };
  };
}
