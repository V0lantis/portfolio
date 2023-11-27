resource "aws_cloudfront_cache_policy" "avolant_fr_distribution_policy" {
  comment     = "Policy with caching enabled. Supports Gzip and Brotli compression."
  default_ttl = 86400
  min_ttl     = 1
  name        = "Managed-CachingOptimized"

  parameters_in_cache_key_and_forwarded_to_origin {
    enable_accept_encoding_brotli = true
    enable_accept_encoding_gzip   = true

    cookies_config {
      cookie_behavior = "none"
    }

    headers_config {
      header_behavior = "none"
    }

    query_strings_config {
      query_string_behavior = "none"
    }
  }

}

resource "aws_cloudfront_distribution" "avolant_fr_distribution" {
  origin {
    domain_name = aws_s3_bucket.avolant_fr.bucket_regional_domain_name
    origin_id   = aws_s3_bucket.avolant_fr.bucket_regional_domain_name
  }

  aliases = [
    "avolant.fr",
    "www.avolant.fr",
  ]
  default_root_object = "index.html"
  enabled             = true
  price_class         = "PriceClass_100"
  retain_on_delete    = false
  staging             = false
  is_ipv6_enabled     = true

  default_cache_behavior {
    cache_policy_id = aws_cloudfront_cache_policy.avolant_fr_distribution_policy.id
    allowed_methods = [
      "GET",
      "HEAD",
    ]
    cached_methods = [
      "GET",
      "HEAD",
    ]
    compress               = true
    default_ttl            = 0
    max_ttl                = 0
    min_ttl                = 0
    smooth_streaming       = false
    target_origin_id       = "avolant.fr.s3.eu-west-3.amazonaws.com"
    trusted_key_groups     = []
    trusted_signers        = []
    viewer_protocol_policy = "redirect-to-https"
  }


  restrictions {
    geo_restriction {
      locations        = []
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn            = aws_acm_certificate.avolant_fr_acm_cert.arn
    cloudfront_default_certificate = false
    minimum_protocol_version       = "TLSv1.2_2021"
    ssl_support_method             = "sni-only"
  }

  tags = var.default_tags

}
