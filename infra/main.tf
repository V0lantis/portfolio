terraform {
  backend "s3" {
    bucket = "general.avolant.fr"
    key    = "avolant.fr/tfstate"
    region = "eu-west-3"
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.26.0"
    }
  }

  required_version = ">= 1.2.0"
}