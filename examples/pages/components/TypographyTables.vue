<template>
  <div class="section">
    <div class="container">
      <h3 class="title">Typography</h3>
      <div id="typography">
        <div class="row">
          <div class="col-md-12">
            <div class="typography-line">
              <h1>
                <span>Header 1</span>
                The Life of Now UI Kit
              </h1>
            </div>
            <div class="typography-line">
              <h2>
                <span>Header 2</span>
                The Life of Now UI Kit
              </h2>
            </div>
            <div class="typography-line">
              <h3>
                <span>Header 3</span>
                The Life of Now UI Kit
              </h3>
            </div>
            <div class="typography-line">
              <h4>
                <span>Header 4</span>
                The Life of Now UI Kit
              </h4>
            </div>
            <div class="typography-line">
              <h5>
                <span>Header 5</span>
                The Life of Now UI Kit
              </h5>
            </div>
            <div class="typography-line">
              <h6>
                <span>Header 6</span>
                The Life of Now UI Kit
              </h6>
            </div>
            <div class="typography-line">
              <p>
                <span>Paragraph</span>
                I will be the leader of a company that ends up being worth billions of dollars, because
                I got the answers. I understand culture. I am the nucleus. I think that’s a
                responsibility that I have, to push possibilities, to show people, this is the level
                that things could be at.
              </p>
            </div>
            <div class="typography-line">
              <span>Quote</span>
              <blockquote>
                <p class="blockquote blockquote-primary">
                  "I will be the leader of a company that ends up being worth billions of dollars,
                  because I got the answers. I understand culture. I am the nucleus. I think that’s a
                  responsibility that I have, to push possibilities, to show people, this is the level
                  that things could be at."
                  <br>
                  <br>
                  <small>
                    - Noaa
                  </small>
                </p>
              </blockquote>
            </div>
            <div class="typography-line">
              <span>Muted Text</span>
              <p class="text-muted">
                I will be the leader of a company that ends up being worth billions of dollars, because
                I got the answers...
              </p>
            </div>
            <div class="typography-line">
              <span>Primary Text</span>
              <p class="text-primary">
                I will be the leader of a company that ends up being worth billions of dollars, because
                I got the answers...</p>
            </div>
            <div class="typography-line">
              <span>Info Text</span>
              <p class="text-info">
                I will be the leader of a company that ends up being worth billions of dollars, because
                I got the answers... </p>
            </div>
            <div class="typography-line">
              <span>Success Text</span>
              <p class="text-success">
                I will be the leader of a company that ends up being worth billions of dollars, because
                I got the answers... </p>
            </div>
            <div class="typography-line">
              <span>Warning Text</span>
              <p class="text-warning">
                I will be the leader of a company that ends up being worth billions of dollars, because
                I got the answers...
              </p>
            </div>
            <div class="typography-line">
              <span>Danger Text</span>
              <p class="text-danger">
                I will be the leader of a company that ends up being worth billions of dollars, because
                I got the answers... </p>
            </div>
            <div class="typography-line">
              <h2>
                <span>Small Tag</span>
                Header with small subtitle
                <br>
                <small>Use "small" tag for the headers</small>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div class="space-50"></div>
      <div id="images">
        <h4>Images</h4>
        <div class="row">
          <div class="col-sm-2">
            <p class="category">Image</p>
            <img alt="Rounded Image" class="rounded" v-lazy="'img/julie.jpg'">
          </div>
          <div class="col-sm-2">
            <p class="category">Circle Image</p>
            <img alt="Circle Image" class="rounded-circle" v-lazy="'img/julie.jpg'">
          </div>
          <div class="col-sm-2">
            <p class="category">Raised</p>
            <img alt="Raised Image" class="rounded img-raised" v-lazy="'img/julie.jpg'">
          </div>
          <div class="col-sm-2">
            <p class="category">Circle Raised</p>
            <img alt="Thumbnail Image" class="rounded-circle img-raised" v-lazy="'img/julie.jpg'">
          </div>
        </div>
      </div>
      <div class="space-70"></div>
      <div class="cd-section" id="contentAreas">
        <h3 class="title">Content Areas</h3>
        <!--                 tables -->
        <div id="tables">
          <div class="title">
            <h3>
              <small>Tables</small>
            </h3>
          </div>
          <div class="row">
            <div class="col-md-12">
              <h4>
                <small>Simple Table</small>
              </h4>
            </div>
            <div class="col-md-8 ml-auto mr-auto">
              <card class="card-plain">
                <div class="row">
                  <div class="col-sm-12">
                    <el-table :data="tableData">
                      <el-table-column min-width="50" type="index"></el-table-column>
                      <el-table-column align="left"
                                       label="Name"
                                       min-width="150"
                                       prop="name">
                      </el-table-column>
                      <el-table-column align="left"
                                       label="Job Position"
                                       min-width="200"
                                       prop="job">
                      </el-table-column>
                      <el-table-column align="left"
                                       label="Salary"
                                       min-width="150"
                                       prop="salary">
                      </el-table-column>
                      <el-table-column header-align="right"
                                       label="Actions"
                                       min-width="150">
                        <div class="text-right table-actions" slot-scope="{row}">
                          <el-tooltip :open-delay="300"
                                      content="Info"
                                      placement="top">
                            <n-button icon size="sm" type="info">
                              <i class="now-ui-icons users_single-02"></i>
                            </n-button>
                          </el-tooltip>


                          <el-tooltip :open-delay="300"
                                      content="Settings"
                                      placement="top">
                            <n-button icon size="sm" type="success">
                              <i class="now-ui-icons ui-2_settings-90"></i>
                            </n-button>
                          </el-tooltip>

                          <el-tooltip :open-delay="300"
                                      content="Delete"
                                      placement="top">
                            <n-button icon size="sm" type="danger">
                              <i class="now-ui-icons ui-1_simple-remove"></i>
                            </n-button>
                          </el-tooltip>

                        </div>
                      </el-table-column>
                    </el-table>
                  </div>
                </div>
              </card>
              <div class="card card-plain">
                <div class="card-body">
                  <div class="table-responsive">

                  </div>
                </div>
              </div>
              <h6>Striped With Checkboxes</h6>
              <card plain>
                <el-table :data="tableData"
                          stripe>
                  <el-table-column type="index">

                  </el-table-column>
                  <el-table-column width="60">
                    <div class="checkbox-cell" slot-scope="{row}">
                      <n-checkbox v-model="row.active"></n-checkbox>
                    </div>
                  </el-table-column>
                  <el-table-column align="left"
                                   label="Name"
                                   prop="name">
                  </el-table-column>
                  <el-table-column align="left"
                                   label="Job Position"
                                   prop="job">
                  </el-table-column>
                  <el-table-column align="left"
                                   label="Salary"
                                   prop="salary">
                  </el-table-column>

                </el-table>
              </card>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <h4>
                <small>Shopping Cart Table</small>
              </h4>
            </div>
            <div class="col-md-12">
              <card plain>
                <shopping-table></shopping-table>
              </card>
            </div>
          </div>
        </div>
        <!--                 end tables -->
        <div class="space-50"></div>
        <!--                 comments -->
        <div id="comments">
          <div class="title">
            <h3>
              <small>Comments</small>
            </h3>
          </div>
          <div class="row">
            <div class="col-md-8 ml-auto mr-auto">
              <div class="media-area">
                <h3 class="title text-center">
                  <small>10 Comments</small>
                </h3>
                <comment :author="comment.author"
                         :avatar="comment.avatar"
                         :comment="comment.comment"
                         :date="comment.date"
                         :key="comment.author + index"
                         :replies="comment.replies"
                         v-for="(comment, index) in comments">
                  <template slot="actions">
                    <el-tooltip content="Reply To Comment" placement="top">
                      <a class="btn btn-primary btn-neutral pull-right" href="#pablo">
                        <i class="now-ui-icons ui-1_send"></i> Reply
                      </a>
                    </el-tooltip>
                    <a :class="{'btn-default': !comment.liked}" class="btn btn-neutral pull-right"
                       href="#pablo">
                      <i class="now-ui-icons ui-2_favourite-28"></i>
                      {{comment.likes}}
                    </a>
                  </template>
                </comment>

                <n-pagination :page-count="3" class="justify-content-center" v-model="commentsPage">

                </n-pagination>

              </div>
              <h4 class="text-center">Post your comment
                <br>
                <small class="text-muted">- Logged In User -</small>
              </h4>
              <div class="media media-post">
                <a class="pull-left author" href="#pablo">
                  <div class="avatar">
                    <img alt="64x64" class="media-object img-raised" src="img/james.jpg">
                  </div>
                </a>
                <div class="media-body">
                                    <textarea class="form-control" placeholder="Write some nice stuff or nothing..."
                                              rows="6"></textarea>
                  <div class="media-footer">
                    <n-button class="pull-right" type="primary" wide>
                      Post Comment
                    </n-button>
                  </div>
                </div>
              </div>
              <!-- end media-post -->
              <h4 class="text-center">Post your comment
                <br>
                <small class="text-muted">- Not Logged In User -</small>
              </h4>
              <div class="media media-post">
                <a class="pull-left author" href="#pablo">
                  <div class="avatar">
                    <img alt="64x64" class="media-object img-raised"
                         src="img/placeholder.jpg" />
                  </div>
                </a>
                <div class="media-body">
                  <form class="form">
                    <div class="row">
                      <div class="col-md-6">
                        <fg-input placeholder="Your Name">
                        </fg-input>
                      </div>
                      <div class="col-md-6">
                        <fg-input placeholder="Your Email">
                        </fg-input>
                      </div>
                    </div>
                    <textarea class="form-control" placeholder="Write some nice stuff or nothing..."
                              rows="6"></textarea>
                    <div class="media-footer">
                      <h6 class="text-muted">Sign in with</h6>
                      <n-button class="btn-twitter" icon round>
                        <i class="fab fa-twitter"></i>
                      </n-button>
                      <n-button class="btn-facebook" icon round>
                        <i class="fab fa-facebook-square"></i>
                      </n-button>
                      <n-button class="btn-google" icon round>
                        <i class="fab fa-google-plus-square"></i>
                      </n-button>
                      <n-button class="pull-right" type="primary">
                        Post Comment
                      </n-button>
                    </div>
                  </form>
                </div>
                <!-- end media-body -->
              </div>
              <!-- end media-post -->
            </div>
          </div>
        </div>
        <!--                 end comments                 -->
      </div>
    </div>
  </div>
</template>
<script>
  import { Button, Card, Checkbox, Comment, FormGroupInput, Pagination } from '@/components';
  import { Table, TableColumn, Tooltip } from 'element-ui/types';
  import ShoppingTable from './TypographyTables/ShoppingTable';

  export default {
    components: {
      Card,
      [Table.name]: Table,
      [TableColumn.name]: TableColumn,
      [Tooltip.name]: Tooltip,
      [Checkbox.name]: Checkbox,
      [Button.name]: Button,
      [FormGroupInput.name]: FormGroupInput,
      [Pagination.name]: Pagination,
      ShoppingTable,
      Comment
    },
    data () {
      return {
        tableData: [{
          name: 'Andrew Mike',
          job: 'Develop',
          salary: '€ 99,225',
          active: false
        }, {
          name: 'John Doe',
          job: 'Design',
          salary: '€ 89,241',
          active: false
        }, {
          name: 'Alex Mike',
          job: 'Design',
          salary: '€ 92,144',
          active: false
        }, {
          name: 'Mike Monday',
          job: 'Marketing',
          salary: '€ 49,990',
          active: true
        },
          {
            name: 'Paul dickens',
            job: 'Communication',
            salary: '€ 69,201',
            active: true
          }
        ],
        commentsPage: 1,
        comments: [
          {
            avatar: 'img/marie.jpg',
            author: 'Tina Andrew',
            date: '7 minutes ago',
            comment: `<p>Chance too good. God level bars. I\'m so proud of @LifeOfDesiigner #1 song in the country. Panda! Don\'t be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!</p>
                                  <p>All praises and blessings to the families of people who never gave up on dreams. Don't forget, You're Awesome!</p>`,
            likes: 243,
            liked: true,
            replies: []
          },
          {
            avatar: 'img/olivia.jpg',
            author: 'Olivia',
            date: 'Yesterday',
            comment: `<p>Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news.</p>
                                  <p> Don't forget, You're Awesome!</p>`,
            likes: 25,
            liked: false,
            replies: [
              {
                avatar: 'img/emily.jpg',
                author: 'Emily',
                date: '2 Days Ago',
                comment: `<p>Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news.</p>
                                  <p> Don't forget, You're Awesome!</p>`,
                likes: 243,
                liked: true,
                replies: []
              }
            ]
          },
          {
            avatar: 'img/james.jpg',
            author: 'Andrew',
            date: '2 Days Ago',
            comment: `<p>Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news.</p>
                                  <p> Don't forget, You're Awesome!</p>`,
            likes: 243,
            liked: true,
            replies: []
          }
        ]

      };
    }
  };
</script>
<style>
  .checkbox-cell {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
