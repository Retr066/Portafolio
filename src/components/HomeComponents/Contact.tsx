import { EnvironmentOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import emailjs from '@emailjs/browser';
import { useFormik } from 'formik';
import { LegacyRef, RefObject, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { Element } from 'react-scroll';
import * as Yup from 'yup';

import { Container } from '../../container';
import { Toast } from '../../utils';
import { useIsVisible } from './hooks/useIsVisible';

export const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const form = useRef<HTMLFormElement | any>();

  useIsVisible(inView, "Contacto");

  const { handleSubmit, touched, errors, getFieldProps, resetForm, isSubmitting } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    onSubmit: () => {
      emailjs.sendForm("service_r9dtv8h", "template_u158uon", form.current, "xpHJVPgZJ4Hq8Yx4n").then(
        (result) => {
          resetForm();
          if (result.text === "OK") {
            Toast.fire({
              icon: "success",
              title: "Mensaje enviado correctamente",
            });
          }
        },
        (error) => {
          Toast.fire({
            icon: "error",
            title: "Error al enviar el mensaje",
          });
          throw new Error(error.text);
        }
      );
    },
    validationSchema: Yup.object({
      name: Yup.string().required("El nombre es requerido"),
      email: Yup.string().email("El email no es válido").required("El email es requerido"),
      phone: Yup.string()
        .matches(/^[0-9]+$/, "El teléfono solo puede contener números")
        .max(10, "El teléfono debe tener máximo 10 dígitos")
        .required("El teléfono es requerido"),
      message: Yup.string().required("El mensaje es requerido"),
    }),
  });

  return (
    <Element name="Contacto">
      <Container ref={ref}>
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className="flex flex-col items-center justify-center w-full h-full max-w-6xl px-4 py-16 mx-auto space-y-4 text-center">
            <h1 className="text-4xl font-bold text-tertiary dark:text-primary font-kdam">{"< Contacto />"}</h1>
            <p className="text-xl text-quaternary dark:text-quinary">¡Escribime!</p>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 ">
              <div className="flex flex-col items-start justify-start space-y-4">
                <div className="flex items-center justify-center gap-4 space-y-2">
                  <MailOutlined className="text-4xl text-primary" />
                  <div className="flex flex-col items-start justify-center">
                    <h2 className="text-xl font-bold text-tertiary dark:text-white">Email</h2>

                    <p
                      style={{
                        wordBreak: "break-all",
                      }}
                      className="text-quaternary dark:text-quinary"
                    >
                      {"jherson.lopez88@gmail.com"}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 space-y-2">
                  <PhoneOutlined className="text-4xl rotate-90 text-primary " />
                  <div className="flex flex-col items-start justify-center">
                    <h2 className="text-xl font-bold text-tertiary dark:text-white">Teléfono</h2>

                    <p className="text-quaternary dark:text-quinary">{"+51 955 284 442"}</p>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-4 space-y-2">
                  <EnvironmentOutlined className="text-4xl text-primary" />
                  <div className="flex flex-col items-start justify-center">
                    <h2 className="text-xl font-bold text-tertiary dark:text-white">Ubicación</h2>

                    <p className="text-quaternary dark:text-quinary">{"Peru - Lima"}</p>
                  </div>
                </div>
              </div>

              <div className="w-full">
                <form ref={form} onSubmit={handleSubmit}>
                  <div className="px-4 py-2 mb-6 appearance-none bg-slate-200 dark:bg-quinary">
                    <label className="block mb-2 text-sm font-bold text-tertiary text-start" htmlFor="name">
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="block w-full m-0 text-base font-normal bg-transparent border-none rounded-lg outline-none appearance-none placeholder:text-quaternary"
                      placeholder="Tu nombre"
                      {...getFieldProps("name")}
                    />
                    {touched.name && errors.name && <p className="text-sm text-red-500 text-start">{errors.name}</p>}
                  </div>

                  <div className="px-4 py-2 mb-6 appearance-none bg-slate-200 dark:bg-quinary">
                    <label className="block mb-2 text-sm font-bold text-tertiary text-start" htmlFor="name">
                      Email
                    </label>
                    <input
                      type="email"
                      className="block w-full m-0 text-base font-normal bg-transparent border-none rounded-lg outline-none appearance-none placeholder:text-quaternary"
                      placeholder="Email"
                      {...getFieldProps("email")}
                    />
                    {touched.email && errors.email && <p className="text-sm text-red-500 text-start">{errors.email}</p>}
                  </div>

                  <div className="px-4 py-2 mb-6 appearance-none bg-slate-200 dark:bg-quinary">
                    <label className="block mb-2 text-sm font-bold text-tertiary text-start" htmlFor="name">
                      Teléfono
                    </label>
                    <input
                      type="number"
                      className="block w-full m-0 text-base font-normal bg-transparent border-none rounded-lg outline-none appearance-none placeholder:text-quaternary"
                      placeholder="Teléfono"
                      {...getFieldProps("phone")}
                    />
                    {touched.phone && errors.phone && <p className="text-sm text-red-500 text-start">{errors.phone}</p>}
                  </div>
                  <div className="px-4 py-2 mb-6 appearance-none bg-slate-200 dark:bg-quinary">
                    <label className="block mb-2 text-sm font-bold text-tertiary text-start" htmlFor="name">
                      Mensaje
                    </label>
                    <textarea
                      rows={2}
                      className="block w-full m-0 text-base font-normal bg-transparent border-none rounded-lg outline-none appearance-none placeholder:text-quaternary"
                      placeholder="¿En qué puedo ayudarte?"
                      {...getFieldProps("message")}
                    />
                    {touched.message && errors.message && <p className="text-sm text-red-500 text-start">{errors.message}</p>}
                  </div>

                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="inline-block w-full py-3 text-sm font-medium leading-snug text-white uppercase transition duration-150 ease-in-out rounded shadow-md bg-primary px-7 hover:bg-secondary dark:shadow-lg dark:shadow-primary/50 hover:shadow-lg focus:bg-secondary focus:shadow-lg focus:outline-none focus:ring-0 active:bg-secondary active:shadow-lg"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    Enviar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Element>
  );
};
