resource "aws_s3_bucket" "avolant_fr" {
  bucket = "avolant.fr"

  tags = var.default_tags
}

resource "aws_s3_bucket_ownership_controls" "avolant_fr" {
  bucket = aws_s3_bucket.avolant_fr.id
  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_bucket_public_access_block" "avolant_fr" {
  bucket = aws_s3_bucket.avolant_fr.id

  # Should be publicly accessible
  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_acl" "avolant_fr" {
  depends_on = [
    aws_s3_bucket_ownership_controls.avolant_fr,
    aws_s3_bucket_public_access_block.avolant_fr,
  ]

  bucket = aws_s3_bucket.avolant_fr.id
  acl    = "public-read"
}

resource "aws_s3_bucket_policy" "allow_access_from_outside" {
  bucket = aws_s3_bucket.avolant_fr.id
  policy = data.aws_iam_policy_document.allow_access_from_outside.json
}

data "aws_iam_policy_document" "allow_access_from_outside" {
  statement {
    sid = "PublicReadGetObject"
    principals {
      identifiers = ["*"]
      type        = "*"
    }
    effect = "Allow"
    actions = [
      "s3:GetObject",
    ]
    resources = [
      "${aws_s3_bucket.avolant_fr.arn}/*",
    ]
  }
}
