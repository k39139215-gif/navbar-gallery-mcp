import unittest

class TestNavbarCatalog(unittest.TestCase):
    def setUp(self):
        self.categories = ['minimalist', 'floating', 'mega-menu', 'glassmorphism', 'responsive-drawer']

    def test_category_membership(self):
        self.assertIn('glassmorphism', self.categories)
        self.assertIn('floating', self.categories)

    def test_search_filter(self):
        items = [{'id': 'nav_1', 'style': 'glassmorphism'}, {'id': 'nav_2', 'style': 'minimalist'}]
        filtered = [x for x in items if x['style'] == 'glassmorphism']
        self.assertEqual(len(filtered), 1)

if __name__ == '__main__':
    unittest.main()
