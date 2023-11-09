using TeduBlog.Core.Repository;

namespace TeduBlog.Core.SeedWorks
{
    public interface IUnitOfWork
    {
        IPostRepository Posts { get; }
        IPostCategoryRepository PostCategories { get; }
        ISeriesRepository Series { get; }

        ITransactionRepository Transactions { get; }
        Task<int> CompleteAsync();
    }
}