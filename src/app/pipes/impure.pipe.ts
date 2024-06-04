import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../post';

@Pipe({
  name: 'impure',
  pure: false
})
export class ImpurePipe implements PipeTransform {
public counter = 0;
  transform(posts: Post[]): any {
    this.counter ++;
    console.log("counter", + this.counter)
    return posts.filter(p=> p.isPublic);
  }

}
