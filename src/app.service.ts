import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(h:Number, t:Number, wt:Number, ecc:Number): string {
    let input:any = {h:Number, t:Number, wt:Number, ecc:Number};
    input.h = h; input.t = t; input.wt = wt; input.ecc = ecc;
    
    function printShit(){
      let shit:string = "temp = " + input.t + " humidity = " + input.h + " water temp = " + input.wt + " ecc = " + input.ecc + "\n"
      return shit;
    };
  var shit:string = printShit();
  return shit;
  }
}
