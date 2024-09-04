pragma circom 2.0.0;

template bitCheck () {
   //Declaration of signals.
   signal input in;
   signal output out;

   //Statements.
   // x(x-1)=0
   in * (in-1) === 0;
   out <== in;
}

template And() {
   //Declaration of signals.
   signal input bit1;
   signal input bit2;
   signal output out;

   //Statements.
}