import { styled } from "styled-components";
import { Loader2 } from "lucide-react";

export const LoadingIcon = styled(Loader2)`
  animation: 1s infinite rotate;

  @keyframes rotate {
    0% { transform: rotate(0) }
    100% { transform: rotate(360deg) }
  }
`