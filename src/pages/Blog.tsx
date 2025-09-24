import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Mock blog data - in real app this would come from Supabase
const blogPosts = [
  {
    id: 1,
    slug: "future-of-sustainable-polymers",
    title: "The Future of Sustainable Polymers in Manufacturing",
    excerpt: "Explore how sustainable polymer solutions are reshaping the manufacturing landscape and driving innovation across industries.",
    content: "Full article content would be here...",
    coverUrl: "/api/placeholder/400/250",
    author: "John Smith",
    publishedAt: "2024-01-15",
    tags: ["Sustainability", "Polymers", "Manufacturing", "Innovation"],
    isPublished: true
  },
  {
    id: 2,
    slug: "recycled-plastics-market-trends",
    title: "Market Trends in Recycled Plastics: 2024 Outlook",
    excerpt: "Analyzing the growing demand for recycled plastic materials and their impact on global supply chains.",
    content: "Full article content would be here...",
    coverUrl: "/api/placeholder/400/250",
    author: "Sarah Johnson",
    publishedAt: "2024-01-10",
    tags: ["Recycling", "Market Trends", "Supply Chain", "Economics"],
    isPublished: true
  },
  {
    id: 3,
    slug: "polymer-selection-guide",
    title: "Complete Guide to Polymer Selection for Your Project",
    excerpt: "A comprehensive guide to help you choose the right polymer material based on application requirements and performance criteria.",
    content: "Full article content would be here...",
    coverUrl: "/api/placeholder/400/250",
    author: "Dr. Ahmed Al-Rashid",
    publishedAt: "2024-01-05",
    tags: ["Guide", "Material Selection", "Engineering", "Applications"],
    isPublished: true
  },
  {
    id: 4,
    slug: "chemical-industry-innovations",
    title: "Latest Innovations in Chemical Processing Technology",
    excerpt: "Discover cutting-edge technologies and processes that are revolutionizing chemical manufacturing and polymer production.",
    content: "Full article content would be here...",
    coverUrl: "/api/placeholder/400/250",
    author: "Maria Rodriguez",
    publishedAt: "2023-12-28",
    tags: ["Technology", "Innovation", "Chemical Processing", "Manufacturing"],
    isPublished: true
  },
  {
    id: 5,
    slug: "agro-polymers-applications",
    title: "Agricultural Applications of Specialized Polymers",
    excerpt: "How modern polymer materials are enhancing agricultural productivity and supporting sustainable farming practices.",
    content: "Full article content would be here...",
    coverUrl: "/api/placeholder/400/250",
    author: "Robert Chen",
    publishedAt: "2023-12-20",
    tags: ["Agriculture", "Polymers", "Sustainability", "Innovation"],
    isPublished: true
  },
  {
    id: 6,
    slug: "quality-control-polymers",
    title: "Quality Control Best Practices in Polymer Manufacturing",
    excerpt: "Essential quality control measures and testing protocols to ensure polymer materials meet the highest industry standards.",
    content: "Full article content would be here...",
    coverUrl: "/api/placeholder/400/250",
    author: "Lisa Anderson",
    publishedAt: "2023-12-15",
    tags: ["Quality Control", "Manufacturing", "Testing", "Standards"],
    isPublished: true
  }
];

const allTags = [...new Set(blogPosts.flatMap(post => post.tags))].sort();

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    
    return matchesSearch && matchesTag && post.isPublished;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-hero text-white py-16">
        <div className="container-custom">
          <div className="text-center space-y-4">
            <h1 className="text-hero">Industry Insights & News</h1>
            <p className="text-body-large text-white/90 max-w-3xl mx-auto">
              Stay updated with the latest trends, innovations, and insights in the polymer 
              and chemical industry from our team of experts.
            </p>
          </div>
        </div>
      </section>

      <div className="container-custom py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Search */}
            <Card className="p-6">
              <h3 className="text-card-title font-semibold mb-4">Search Articles</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </Card>

            {/* Tags */}
            <Card className="p-6">
              <h3 className="text-card-title font-semibold mb-4">Topics</h3>
              <div className="space-y-2">
                <Button
                  variant={selectedTag === null ? "default" : "ghost"}
                  size="sm"
                  className="w-full justify-start"
                  onClick={() => setSelectedTag(null)}
                >
                  All Articles ({blogPosts.length})
                </Button>
                {allTags.map((tag) => {
                  const count = blogPosts.filter(post => post.tags.includes(tag)).length;
                  return (
                    <Button
                      key={tag}
                      variant={selectedTag === tag ? "default" : "ghost"}
                      size="sm"
                      className="w-full justify-between"
                      onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                    >
                      <span>{tag}</span>
                      <Badge variant="secondary" className="text-xs">
                        {count}
                      </Badge>
                    </Button>
                  );
                })}
              </div>
            </Card>

            {/* Newsletter Signup */}
            <Card className="p-6 bg-gradient-card">
              <h3 className="text-card-title font-semibold mb-4">Stay Updated</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Subscribe to our newsletter for the latest industry insights and product updates.
              </p>
              <div className="space-y-3">
                <Input type="email" placeholder="Your email address" />
                <Button variant="brand" size="sm" className="w-full">
                  Subscribe
                </Button>
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Results Info */}
            <div className="mb-8">
              <p className="text-muted-foreground">
                {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
                {selectedTag && ` for "${selectedTag}"`}
                {searchQuery && ` matching "${searchQuery}"`}
              </p>
            </div>

            {/* Articles Grid */}
            {filteredPosts.length > 0 ? (
              <div className="space-y-8">
                {filteredPosts.map((post, index) => (
                  <Card key={post.id} className={`overflow-hidden card-hover ${index === 0 ? 'lg:col-span-2' : ''}`}>
                    <div className={`grid ${index === 0 ? 'lg:grid-cols-2' : 'md:grid-cols-3'} gap-0`}>
                      {/* Image */}
                      <div className={`${index === 0 ? 'lg:col-span-1' : 'md:col-span-1'} bg-muted h-48 ${index === 0 ? 'lg:h-auto' : ''}`}>
                        <div className="w-full h-full bg-gradient-primary opacity-20"></div>
                      </div>

                      {/* Content */}
                      <div className={`${index === 0 ? 'lg:col-span-1' : 'md:col-span-2'} p-6 flex flex-col justify-between`}>
                        <div>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {post.tags.slice(0, 3).map((tag) => (
                              <Badge 
                                key={tag} 
                                variant="secondary" 
                                className="text-xs cursor-pointer"
                                onClick={() => setSelectedTag(tag)}
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <h2 className={`${index === 0 ? 'text-xl lg:text-2xl' : 'text-lg'} font-semibold text-card-foreground mb-3 hover:text-brand-primary transition-colors`}>
                            <Link to={`/blog/${post.slug}`}>
                              {post.title}
                            </Link>
                          </h2>

                          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                            {post.excerpt}
                          </p>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <User className="h-3 w-3" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              <span>{formatDate(post.publishedAt)}</span>
                            </div>
                          </div>

                          <Button variant="ghost" size="sm" className="text-brand-primary hover:text-brand-accent" asChild>
                            <Link to={`/blog/${post.slug}`}>
                              Read More
                              <ArrowRight className="h-3 w-3 ml-1" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-muted-foreground mb-4">
                  <Search className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">No articles found</h3>
                  <p>Try adjusting your search criteria or browse all articles.</p>
                </div>
                <Button 
                  variant="brand-outline" 
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedTag(null);
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}

            {/* Load More (if needed) */}
            {filteredPosts.length > 6 && (
              <div className="text-center mt-12">
                <Button variant="brand-outline" size="lg">
                  Load More Articles
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-gradient-hero text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="text-section mb-4">
            Stay Connected with Industry Trends
          </h2>
          <p className="text-body-large text-white/90 max-w-2xl mx-auto mb-8">
            Don't miss out on the latest insights, market trends, and innovations in the polymer industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="brand-accent" size="lg" asChild>
              <Link to="/contact">
                Subscribe to Newsletter
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="brand-outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-primary" asChild>
              <Link to="/products">
                Explore Our Products
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;