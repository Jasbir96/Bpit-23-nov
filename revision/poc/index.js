    // // top to bottom -left right
    // // print
    // console.log("Hello BPIT23");
    // // variable declare =>undefined
    // let a;
    // // no variable type
    // //   primitives types -> numbers,string,boolean, null ,undefined
    // // number
    // a=10;
    // a=10.1;
    // // string
    // a="hello everyone";
    // a='hello from single quotes everyone';
    // // /boolean => true,false
    // a=true;
    // a=null;
    // // console.log(a);
    // //  for ,while loop,if ,switch ,classes ,return , break
    // let num=22;
    // for(let div=2;div*div<=num;div++){
    //     if(num%div==0)
    //     {
    //         console.log("Number is not prime",num);
    //         return;
    //     }
    // }
    // console.log("Number is prime",num);

    // non Primitives => function , objects , arrays
    // function definition
    function SayHello(){
        console.log("Steve Say's hello");
        // return true;
    }
    // function call 
    // let rVal= SayHello();
    // console.log(rVal);


    // Array=> collection of homogeneous data types
    // Array=> collection of any valid Js
    //  Type=> number,string,boolean

    // array declare
    let arr=[
        1,
        1.1
        ,"string",
        null,
        'hello',
        undefined,
        [1,2,3,4,5]
    ];
    // get
    // console.log(arr[6][3]);
    // console.log(arr.length);
    // push => add last
    console.log(arr);
    console.log("`````````````````````````````````");
    arr.push("last val");
    console.log(arr);
    // pop => removeLast
    // unshift=> addFirst
    // shift => remove First
