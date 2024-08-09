import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { concatMap, filter, interval, mergeMap, of,Subject,switchMap,take, BehaviorSubject, ReplaySubject, exhaustMap } from 'rxjs';

@Component({
  selector: 'app-t101',
  templateUrl: './t101.component.html',
  styleUrls: ['./t101.component.css']
})
export class T101Component implements OnInit{

  MAPS =  ['merge-Map','switch-Map','concat-Map','exhaust-Map'];
  SUBJECTS = ['Subject','Behaviour-Subject', 'Replay-Subject'];

  constructor(private http: HttpClient){

  }

  ngOnInit(): void {
    console.log('abcd')
  }
  
  onclick(indexMap: string){

    let postIds = interval(1).pipe(filter((val: number)=>val>0),take(5));
    console.log(postIds);
//mergeMap: Unlike concatMap, mergeMap does not wait for the previous call to finish. It emits all requests as they come in, processing them at the same time. However, the response order may not match the request order.
    if(indexMap == this.MAPS[0]){
      postIds.pipe(mergeMap((id)=>
        {
          return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        })).
      subscribe((data)=>
      console.log(data));
    }
//switchMap: When a bunch of values are emitted quickly, switchMap only cares about the latest one and ignores the rest. It does not wait for the previous calls to complete before making new ones.    
     else if (indexMap == this.MAPS[1]){
      postIds.pipe(switchMap((id)=>
        {
          return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        })).
      subscribe((data)=>
      console.log(data));
    }
//concatMap: This operator creates a queue of requests and handles them one after the other. It waits for the previous call to finish before making the next one. It maintains the order of requests and creates a link between them.    
    else if (indexMap == this.MAPS[2]){
      postIds.pipe(concatMap((id)=>
        {
          return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        })).
      subscribe((data)=>
      console.log(data));
    }
//exhaustMap: This operator deals with the first request and ignores all subsequent requests until the first one is done. Once the first request is finished, it's ready to handle the next one. It ensures that requests are not queued.    
    else if (indexMap == this.MAPS[3]){
      postIds.pipe(exhaustMap((id)=>
        {
          return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        })).
      subscribe((data)=>
      console.log(data));
    }
 }

  onclick2(indexSubject: string){
    if(indexSubject==this.SUBJECTS[0]){
      let subject$ = new Subject();
      subject$.subscribe(data=>console.log("observer1"+ " " + data));
      subject$.next(1);
      subject$.subscribe(data=>console.log("observer2"+ " " + data));
      subject$.next(2);
    } 
/* The most common type of Subject used with Angular is BehaviorSubject. Why is that? Because a BehaviorSubject has two exciting features that a plain Subject does not have:

          It starts with a default value, which means it is never empty.
          When we subscribe to a behavior subject, it will immediately give us the last emitted value.
*/
    else if(indexSubject==this.SUBJECTS[1]){
      let BehaviorSubject$ = new BehaviorSubject(0);
      BehaviorSubject$.subscribe(data=>console.log("observer1"+ " " + data));
      BehaviorSubject$.next(1);
      BehaviorSubject$.subscribe(data=>console.log("observer2"+ " " + data));
      BehaviorSubject$.next(2);
    }
/* A ReplaySubject is very similar to a BehaviorSubject, with two key differences:

          No default value
          Can replay more than just the last value
*/    
    else if(indexSubject==this.SUBJECTS[2]){
      let ReplaySubject$ = new ReplaySubject();
      ReplaySubject$.subscribe(data=>console.log("observer1"+ " " + data));
      ReplaySubject$.next(1);
      ReplaySubject$.subscribe(data=>console.log("observer2"+ " " + data));
      ReplaySubject$.next(2);
    }
    
  }

}
