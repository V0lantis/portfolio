variable "default_tags" {
  default = {
    Name    = "avolant.fr"
    Project = "static-website"

  }
  description = "Default Tags avolant.fr static website"
  type        = map(string)
}
