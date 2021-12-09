function One(x) {
  // ARRAY_INDEX_NEGATIVE
  var arr = [1, 2, 3];
  if (x < 0) {
    arr[x] = 3;
  }
}

function Two() {
  // IDENTICAL_BRANCHES
  if (x >= 0) {
    y = x;
  }
  else{
    y = x;
  }
}

function Three() {
  // NULL_POINTER
  var obj = null;
  var y = obj.x;
  console.log(y);
}

function Four() {
  // BAD_BITWISE_OPERATOR
  var obj;
  if (obj && obj.prop) {
    console.log(obj.prop);
  }
}


































// function Five() {
//   // BAD_ASSIGN_IN_CONDITION
//   var x = -1;
//   if ((x = -1)) console.log("Error!", x);
// }

// function Six() {
//   // UNUSED_EXPR
//   this.foo + 42;
// } //

// function Seven() {
//   // SWITCH_CASE_FALL_THROUGH
//   var x;
//   switch (x) {
//     case "1":
//       console.log("Do one thing");
//     case "2":
//       console.log("Do another thing");
//   }
// }

// function Eight() {
//   // CONSTANT_CONDITION
//   var x = "Fo";
//   var y = x + "Bar";
//   if (y === "FooBar") {
//     console.log("Do something");
//   }
// }

// function Nine() {
//   // UNREACHABLE_CODE
//   return;

//   var bar = 1;
//   console.log(bar);
// }

// function Ten(url) {
//   // UNUSED_VAR_ASSIGN
//   var foo = url + "?query=deepscan";
//   foo = url.replace(/\s/gi, "");
//   console.log(foo);
// }
