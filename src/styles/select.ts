import { StylesConfig } from "react-select";

export const selectStyle: StylesConfig<
  { value: string; label: string },
  false
> = {
  control: (base) => ({
    ...base,
    border: "1px solid #dbdada",
    padding: "0.11rem 0.05rem",
    fontSize: "1rem",
    boxShadow: "none",
    "&:hover": {
      border: "1px solid #dbdada"
    },
    fontFamily: "Montserrat-Regular",
    marginTop: "0.4rem"
  }),
  menu: (base) => ({
    ...base,
    fontFamily: "Montserrat-Regular"
  })
};

export const selectStyleErr: StylesConfig<
  { value: string; label: string },
  false
> = {
  control: (base) => ({
    ...base,
    border: "1px solid #b00020",
    padding: "0.11rem 0.05rem",
    fontSize: "1rem",
    boxShadow: "none",
    "&:hover": {
      border: "1px solid #b00020"
    },
    fontFamily: "Montserrat-Regular",
    marginTop: "0.4rem"
  }),
  menu: (base) => ({
    ...base,
    fontFamily: "Montserrat-Regular"
  })
};
