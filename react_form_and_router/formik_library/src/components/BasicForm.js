import React from "react";
import {Formik, Field, Form} from "formik";

function BasicForm() {
    return (
        <div>
            <h1>Dang ky thong tin</h1>
            <Formik initialValues={{
                name: "",
                phone: "",
                address: ""
            }} onSubmit={async values => {
                if (!Number(values.phone)) {
                    alert("Chi duoc nhap so.")
                } else {
                    alert(JSON.stringify(values, null, 2))
                }
            }
            }>
                <Form>
                    <label htmlFor="name">Name</label>
                    <Field id="name"
                           name="name"
                           placeholder="Nhập tên"
                           type="text">
                    </Field>

                    <label htmlFor="phone">Phone</label>
                    <Field id="phone"
                           name="phone"
                           placeholder="Nhap so dien thoai"
                           type="text">
                    </Field>

                    <label htmlFor="address">Address</label>
                    <Field id="address"
                           name="address"
                           placeholder="Nhập dia chi"
                           type="text">
                    </Field>
                    <button type={"submit"}>Dang ky</button>
                </Form>
            </Formik>
        </div>
    );
}

export default BasicForm;