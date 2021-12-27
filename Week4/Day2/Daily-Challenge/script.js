let groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    payed: true,
    meansOfPayment: ["cash", "creditCard"],
  },
};
// Hint: To do this daily challenge, take a look at today’s lesson Pass By Value & Pass By Reference

// 1.Copy this object using the method that was taught in today’s lesson.
// 2.Change the value of totalPrice to 35$. Will we also see this modification in the copied objects ? //yes. both obj, equal to eachother, are pointing now to the same address in the heap. as we change the value of the address (we can do that since we are dealing with complex data types), both objects wil change their value.
// 3.Change the value of payed to false. Will we also see this modification in the copied objects ? Why ? yes. the other obj is part of the groceries object. when any one of its values will change, the change will be made at the heap, and the copyGro, pointing to the same address will change accordingly.

let copyGro = groceries;
groceries.totalPrice = "35$";
groceries.other.payed = false;
