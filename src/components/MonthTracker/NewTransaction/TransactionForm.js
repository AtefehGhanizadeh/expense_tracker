import { useState } from "react";
import "./TransactionForm.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addMonths } from "date-fns";
import { Pizza, Plane, ShoppingCart, Home, Wallet, Text } from "lucide-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const iconList = [
  { category: "Food", icon: <Pizza size={25} strokeWidth={1.75} /> },
  { category: "Shopping", icon: <ShoppingCart size={25} strokeWidth={1.75} /> },
  { category: "HomeRent", icon: <Home size={25} strokeWidth={1.75} /> },
  { category: "Travel", icon: <Plane size={25} strokeWidth={1.75} /> },
  { category: "others", icon: <Text size={25} strokeWidth={1.75} /> },
  { icon: <Wallet size={25} strokeWidth={1.75} /> },
];

function TransactionForm(props) {
  const [startDate, setStartDate] = useState(new Date());

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const start = new Date(year, month, 1);

  function submitHandler(values) {
    let date = startDate.toISOString().slice(0, 10);
    let type = values.picked === "income" ? "income" : "expense";
    let icon;

    if (type === "expense") {
      switch (values.Category) {
        case "Food":
          icon = iconList[0].icon;
          break;
        case "Shopping":
          icon = iconList[1].icon;
          break;
        case "Home Rent":
          icon = iconList[2].icon;
          break;
        case "Travel":
          icon = iconList[3].icon;
          break;
        default:
          icon = iconList[4].icon;
      }
    } else {
      icon = iconList[5].icon;
    }

    const item = {
      amount: values.Amount,
      note: values.Note,
      date,
      category: values.Category,
      id: Math.random().toString(),
      type,
      icon,
    };

    props.onAddItem(item);
  }
  return (
    <Formik
      initialValues={{
        Amount: "",
        Category: "",
        Note: "",
        picked: "",
      }}
      validationSchema={Yup.object({
        Amount: Yup.number().required("Please enter amount!"),
        Category: Yup.string().required("Please choose a category!"),
        picked: Yup.string().required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        submitHandler(values);
        setSubmitting(false);
      }}
    >
      {(formik) => (
          <Form
            className="form md:border-l-4 md:border-l-gray md:border-dashed absolute flex flex-col justify-between h-[100%] bg-secondaryColor w-[100%] p-4"
            onSubmit={formik.handleSubmit}
          >
            <div className="flex flex-col">
              <label htmlFor="Amount">Amount:</label>
              <Field
                name="Amount"
                type="number"
                value={formik.values.Amount}
                onChange={formik.handleChange}
                className={formik.errors.Amount ? "error" : ""}
              />
              <div className="error-massage">
                <ErrorMessage name="Amount" />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="Category">Category:</label>
              <Field
                type="text"
                name="Category"
                list="mySuggestion"
                value={formik.values.Category}
                onChange={formik.handleChange}
                className={formik.errors.Category&&formik.touched ? "error" : ""}
              />
              <div className="error-massage">
                <ErrorMessage name="Category" />
              </div>
              <datalist id="mySuggestion">
                <option>Food</option>
                <option>Shopping</option>
                <option>Home Rent</option>
                <option>Travel</option>
              </datalist>
            </div>
            <div className="flex flex-col">
              <label htmlFor="Note">Note:</label>
              <Field
                name="Note"
                value={formik.values.Note}
                onChange={formik.handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="Date">Date:</label>
              <DatePicker
                id="Date"
                selected={startDate}
                minDate={start}
                maxDate={addMonths(start, 1)}
                startDate={startDate}
                onChange={(date) => setStartDate(date)}
                showDisabledMonthNavigation
              />
            </div>

            <div className="flex justify-around">
              <div className="flex flex-1 gap-1 justify-center items-center ">
                <Field type="radio" name="picked" value="income" />
                <label>Income</label>
              </div>
              <div className="flex flex-1 gap-1 justify-center items-center">
                <Field type="radio" name="picked" value="expense" />
                <label>Expense</label>
              </div>
            </div>
            <ErrorMessage name="picked" />
            <div className="flex flex-col gap-[10px]">

            <button
              type="submit"
              className="bg-primaryColor text-color rounded-lg p-2"
            >
              Add
            </button>
            <button className="bg-primaryColor text-color rounded-lg p-2" onClick={props.hideFormHandler}>
              Close
            </button>
            </div>
          </Form>
      )}
    </Formik>
  );
}

export default TransactionForm;
