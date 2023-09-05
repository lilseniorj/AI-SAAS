"use-client"

import { useEffect } from "react"
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("20119024-37a3-4222-a4c0-da490e223832");
  }, [])

  return null;
}