import { React } from "react";

import { useNavigate } from "react-router-dom";
import UniversalButton from "../../components/universal-button.component/universal-button.component";
import {
  ErrorPageContainer,
  ErrorPageHeader,
} from "./error-page.component.styles";
export default function ErrorPage() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/");
  };

  return (
    <>
      <ErrorPageContainer>
        <ErrorPageHeader>Something went wrong... </ErrorPageHeader>

        <UniversalButton
          label={"Go to Home Page"}
          action={handleSubmit}
        ></UniversalButton>
      </ErrorPageContainer>
    </>
  );
}
