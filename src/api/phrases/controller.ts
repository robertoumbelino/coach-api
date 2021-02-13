import { Get, OnUndefined, JsonController } from 'routing-controllers'

import { getRandomPhrase } from './service'

@JsonController('/phrases')
export class PhraseController {
  @Get('/depressions')
  @OnUndefined(204)
  depressions() {
    return getRandomPhrase()
  }
}
