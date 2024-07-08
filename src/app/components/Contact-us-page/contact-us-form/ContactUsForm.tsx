import { Button, Card, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "next/navigation";
import Image from "next/image";

export interface IMessage {
  email: any;
  caption: any;
}

const ContactUsForm = () => {
  const loadingTextOptions = [
    "contactUsPage.contactUsForm.loading1",
    "contactUsPage.contactUsForm.loading2",
    "contactUsPage.contactUsForm.loading3",
  ];

  const { locale }: any = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IMessage>({
    defaultValues: {
      email: "",
      caption: "",
    },
  });
  const [isLoading, setIsLoading] = useState(false);
  const [loadingTextIndex, setLoadingTextIndex] = useState(0);
  const [showText, setShowText] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isAnimate, setIsAnimate] = useState(false);
  let intervalId: any;
  useEffect(() => {
    if (isLoading && !isError && !isSuccess) {
      console.log("done");
      setTimeout(() => {
        setShowText(true);
        intervalId = setInterval(() => {
          setLoadingTextIndex(
            (prevIndex) => (prevIndex + 1) % loadingTextOptions.length,
          );
        }, 500);
      }, 0);
    }
    if (!isLoading && isSuccess && !isError) {
      setTimeout(() => {
        setShowText(false);
        setIsSuccess(false);
      }, 2000);
    }
    if (!isLoading && !isSuccess && isError) {
      setShowText(false);
      setTimeout(() => {
        setIsError(false);
      }, 2000);
    } else {
      setShowText(false);
      // setIsLoading(false)
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isLoading, isSuccess, showText, isError]);

  const onSubmit = async (data: IMessage) => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/addEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: data.email, caption: data.caption }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setIsLoading(false);
        setIsError(false);
        console.log("Email added successfully");
        reset({
          email: "",
          caption: "",
        });
      } else {
        setIsLoading(false);
        setIsSuccess(false);
        setIsError(true);
        console.error("Failed to add email");
      }

      setIsAnimate(false);
    } catch (error) {
      setIsLoading(false);
      setIsSuccess(false);
      setIsError(true);
      console.error("Error adding email:", error);
      setIsAnimate(false);
    }
  };
  const delayedSubmit = (data: IMessage) => {
    setIsAnimate(true);
    // Delay the execution of onSubmit by 2 seconds
    setTimeout(() => {
      onSubmit(data);
    }, 2000);
  };

  return (
    <Card
      sx={{
        zIndex: 0,
        border: "1px solid rgba(13, 19, 33, 1)",
        boxShadow: "none",
        bgcolor: "rgba(245, 245, 245, 1)",
        borderRadius: 0,
        padding: "28px 12px",
        marginTop: { md: "22px", xs: "30px", sm: "30px" },
        marginInlineEnd: { md: "43px" },
        marginBottom: { xs: "84px", md: "152px" },
      }}
    >
      <form onSubmit={handleSubmit(delayedSubmit)} noValidate>
        <Stack gap={2}>
          <TextField
            label={"shared.email"}
            type={"email"}
            variant="filled"
            {...register("email", {
              required: {
                value: true,
                message: t("shared.requiredValidation"),
              },
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: t("shared.emailValidation"),
              },
            })}
            error={Boolean(errors?.email?.message)}
            helperText={
              Boolean(errors?.email?.message) && errors?.email?.message
            }
          />

          <TextField
            label={"shared.caption"}
            variant="filled"
            multiline
            rows={4}
            error={Boolean(errors?.caption?.message)}
            helperText={
              Boolean(errors?.caption?.message) && errors?.caption?.message
            }
          />
        </Stack>
        <Button
          type="submit"
          variant="contained"
          sx={{
            marginTop: "30px",
            width: "100%",
            padding: "10px 20px",
            bgcolor: isSuccess
              ? "rgba(37, 92, 9, 1)"
              : isError
                ? "rgba(179, 38, 30, 1)"
                : "rgba(13, 19, 33, 1)",
          }}
        >
          <Stack direction="row" sx={{ alignItems: "center", gap: "10px" }}>
            <Typography
              color="white"
              sx={{ fontSize: "18px", textTransform: "none" }}
            >
              {showText
                ? loadingTextOptions[loadingTextIndex]
                : isSuccess
                  ? "contactUsPage.contactUsForm.success"
                  : isError
                    ? "contactUsPage.contactUsForm.error"
                    : "contactUsPage.contactUsForm.sendMassage"}
            </Typography>
            {!(isSuccess || isError) && (
              <Image
                src="../icon/Message.svg"
                alt="message-icon"
                width={0}
                height={0}
                style={{
                  height: "auto",
                  width: "auto",
                  rotate: locale === "en" ? "0deg" : "-90deg",
                  transformOrigin: "center center",
                  animation: isAnimate
                    ? locale === "en"
                      ? `messageAnimationLtr 2s forwards`
                      : `messageAnimationRtl 2s forwards`
                    : "none",
                }}
              />
            )}
          </Stack>
        </Button>
      </form>
    </Card>
  );
};

export default ContactUsForm;
