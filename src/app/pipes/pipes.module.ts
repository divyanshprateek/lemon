import { NgModule } from '@angular/core';
import { TimeAgoPipe } from './time-ago/time-ago';
import { TimeAgoIso_8061Pipe } from './time-ago-iso-8061/time-ago-iso-8061';
@NgModule({
	declarations: [TimeAgoPipe,
    TimeAgoIso_8061Pipe],
	imports: [],
	exports: [TimeAgoPipe,
    TimeAgoIso_8061Pipe]
})
export class PipesModule {}
