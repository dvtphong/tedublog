using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TeduBlog.Core.Domain.Content
{
    public enum PostStatus
    {
        Draft = 1,
        Canceled = 2,
        WaitingForApprval = 3,
        Rejected = 4,
        WaitingForPushlish = 5,
        Pushlished = 6
    }

    [Table("Post")]
    [Index(nameof(Slug), IsUnique = true)]
    public class Post
    {
        [Required]
        public Guid AutherUserId { get; set; }

        public string? Author { get; set; }

        [Required]
        public Guid CategoryId { get; set; }

        public string? Content { get; set; }

        public DateTime DateCreated { get; set; }

        public DateTime DateModified { get; set; }

        [MaxLength(500)]
        public string? Description { get; set; }

        [Key]
        public Guid Id { get; set; }

        public bool IsPaid { get; set; }

        [Required]
        [MaxLength(250)]
        public required string Name { get; set; }

        public double? RoyaltyAmount { get; set; }

        [MaxLength(160)]
        public string? SeoDescription { get; set; }

        [Required]
        [Column(TypeName = "varchar(250)")]
        public required string Slug { get; set; }
        [MaxLength(128)]
        public string? Source { get; set; }

        public PostStatus Status { get; set; }

        public string? Tags { get; set; }

        [MaxLength(500)]
        public string? Thumbnail { get; set; }
        public int ViewCount { get; set; }
    }
}