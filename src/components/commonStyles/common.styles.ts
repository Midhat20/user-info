import { useMemo } from "react";

export const useStyles = () => {
  return useMemo(() => {
    return {
      btnWrapper: {
        display: "flex",
        flexDirection: "column",
      },
      bgSubmitColor: {
        backgroundColor: "#D0FFBC",
      },
      separator: {
        marginTop: 10,
        marginBottom: 20,
      },
      wrapper: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
      },
      card: {
        display: "flex",
        flexDirection: "column",
        border: "1px solid #000000",
        padding: 50,
        borderRadius: 10,
        backgroundColor: "#E0F3F5",
      },
      error: {
        color: "red",
        fontSize: 12,
        paddingTop: 5,
      },
      errorWrapper: {
        marginBottom: 10,
        marginTop: 10,
      },
      removeBg: {
        backgroundColor: "#FF9999",
      },
      userCard: {
        marginTop: 20,
        backgroundColor: "#E0F3F5",
      },
    } as const;
  }, []);
};
