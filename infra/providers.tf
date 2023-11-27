provider "aws" {
  region = "eu-west-3"
}

provider "aws" {
  alias  = "us"
  region = "us-east-1"
}