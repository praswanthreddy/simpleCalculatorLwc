import { LightningElement,track } from 'lwc';

export default class SimpleCalculatorLwc extends LightningElement {
   

  @track result
  @track num1
  @track num2

  changeHandler1(event){
      this.num1=event.target.value
      console.log('initialize change at num1',this.num1)
  }
  changeHandler2(event){
    this.num2=event.target.value
    console.log('initialize change at num1',this.num1)
  
  }
   

  handleClick(event) {
    const oper=event.target.name
    if(oper==="sum"){
      this.result=Number(this.num1)+Number(this.num2)
      console.log('initialize change at num1',this.result)
    }
    else if(oper==="minus"){
      this.result=Number(this.num1)-Number(this.num2)
    }
    else if(oper==="multiply"){
      this.result=Number(this.num1)*Number(this.num2)
    }
    else if(oper==="divide"){
      this.result=Number(this.num1)/Number(this.num2)
    }

  }
}