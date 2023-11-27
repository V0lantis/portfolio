resource "aws_route53_zone" "avolant_fr" {
  name = "avolant.fr"

  tags = var.default_tags
}

resource "aws_acm_certificate" "avolant_fr_acm_cert" {
  provider      = aws.us
  domain_name   = "avolant.fr"
  key_algorithm = "RSA_2048"
  subject_alternative_names = [
    "avolant.fr",
    "www.avolant.fr",
  ]
  validation_method = "DNS"

  options {
    certificate_transparency_logging_preference = "ENABLED"
  }
  tags = var.default_tags
}

resource "aws_route53_record" "avolant_fr_to_cloudfront" {
  zone_id = aws_route53_zone.avolant_fr.zone_id
  name    = "avolant.fr"
  type    = "A"

  alias {
    evaluate_target_health = false
    name                   = aws_cloudfront_distribution.avolant_fr_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.avolant_fr_distribution.hosted_zone_id
  }
}

resource "aws_route53_record" "www_avolant_fr_to_cloudfront" {
  zone_id = aws_route53_zone.avolant_fr.zone_id
  name    = "www.avolant.fr"
  type    = "A"

  alias {
    evaluate_target_health = false
    name                   = aws_cloudfront_distribution.avolant_fr_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.avolant_fr_distribution.hosted_zone_id
  }
}
